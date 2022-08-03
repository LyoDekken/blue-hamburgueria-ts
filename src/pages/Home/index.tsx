export default function Home() {
  return (
    <div className="container">
      {/*------------------------------------------------*/}
      <div className="menu-container"></div>
      {/*------------------------------------------------*/}
      <div className="home-container">
        <header>
          <div>
            <h1>Hamburguer Blue</h1>
            <p>{new Date(Date.now()).toLocaleString()}</p>
          </div>
          <div>
            <img src="" alt="" />
            <input type="text" />
          </div>
        </header>
        <section>
          <div>
            <h1>Escolha os Sabores</h1>
          </div>
          <div>
            <h2>Sabores</h2>    
            <select name="" id="">
              <option value="1">1</option>
            </select>
          </div>
          <div>
            <div>Card</div> {/*Dado Mocado*/}
            <div>Card</div> {/*Dado Mocado*/}
            <div>Card</div> {/*Dado Mocado*/}
            <div>Card</div> {/*Dado Mocado*/}
            <div>Card</div> {/*Dado Mocado*/}
          </div>
        </section>
      </div>
      {/*------------------------------------------------*/}
      <aside></aside>
    </div>
  );
}
