import "./styles.css";

export function PageContainer(props) {
  return (
    <div className='main-container'>
      {props.children}
    </div>
  );
}