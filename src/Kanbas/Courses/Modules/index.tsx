import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as client from "./client";
import * as db from "../../Database";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { courseNumber } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const saveModule = async (module: any) => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModule = async (module: any) => {
    const newModule = await client.createModule(courseNumber as string, module);
    dispatch(addModule(newModule));
  };

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const modules = await client.findModulesForCourse(courseNumber as string);
        dispatch(setModules(modules));
      } catch (error) {
        console.error("Failed to fetch assignments:", error);
      }
    };

    fetchModules();
  }, [courseNumber, dispatch]);



  console.log("Course ID from URL params:", courseNumber);
  console.log("All modules:", db.modules);
  console.log("Filtered modules:", modules);

  return (
    <div className="wd-modules">
        <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          createModule({ name: moduleName, course: courseNumber });
          setModuleName("");
        }}
      />

      <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.length === 0 ? (
          <div>No modules found for this course.</div>
        ) : (
          modules
          .filter((module:any) => module.course === courseNumber)
          .map((module:any) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                { module.editing && (
                        <input className="form-control w-50 d-inline-block" value={module.name}
                        onChange={(e) => saveModule({ ...module, name: e.target.value }) }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            saveModule({ ...module, editing: false });
                          }
                        }} />
      )}
                <ModuleControlButtons 
                moduleId={module._id}
                deleteModule={(moduleId) => {
                  removeModule(moduleId); 
                }}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />

        
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson:any) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson list-group-item p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
