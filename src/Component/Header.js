import Button from './Button';
function Header({nameOne, onAddTask, showAdd}) {
  return (
    <div>
      <h1 className="headers"> {nameOne}</h1>
      <Button
        onClick={onAddTask}
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'close' : 'Add'}
      />
    </div>
  );
}
Header.defaultProps = {
  nameOne: 'task traker',
};

export default Header;
