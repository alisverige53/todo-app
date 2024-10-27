interface IButton {
  onClick: Function;
  text: string;
  backgroundColor?: string;
}
export const Button = ({ onClick, text, backgroundColor }: IButton) => {
  return (
    <button
      onClick={() => onClick}
      type='submit'
      style={{
        backgroundColor: backgroundColor,
        marginLeft: '5px',
        borderRadius: '5px',
      }}
    >
      {text}
    </button>
  );
};
