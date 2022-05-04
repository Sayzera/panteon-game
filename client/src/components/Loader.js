

export default function Loader () {
  return (
    <div className="loader-container">
      <img
        alt='Panteon Loading...'
        style={{ width: '100%' }}
        src={require('../assets/img/loader.gif')}
      ></img>
      <p>Loading...</p>
    </div>
  );
}
