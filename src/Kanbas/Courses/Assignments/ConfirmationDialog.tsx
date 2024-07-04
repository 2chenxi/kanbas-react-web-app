export default function ConfirmationDialog({ message, onConfirm, onCancel }: { 
  message: string; 
  onConfirm: () => void; 
  onCancel: () => void; 
}) {
  return (
      <div>
        <p>{message}</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
  );
}
