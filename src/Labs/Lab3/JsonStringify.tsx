export default function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    let validJsonString = '{"key": "value"}'; // A valid JSON string
  
    return (
      <div className="wd-json-stringify">
        <h3>JSON Stringify</h3>
        <div>squares = {JSON.stringify(squares)}</div>
        <div>validJsonString = {JSON.parse(validJsonString).key}</div>
        <hr />
      </div>
    );
  }
  
  