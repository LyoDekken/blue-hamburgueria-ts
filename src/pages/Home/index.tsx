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
      <aside>
        <header>
          <h2>Pedido</h2>
          <div>
            <button>Comer no local</button>
            <button>P/ viagem</button>
            <button>Delivery</button>
          </div>
        </header>
        <div>
          <div>
            <h3>Item</h3>
            <h3>Qtd</h3>
            <h3>Preço</h3>
          </div>
        </div>
        <div className="checkout-card-container">
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
        </div>
        <div>
            <div>
              <p>Desconto</p>
              <p>R$0,00</p>
            </div>
            <div>
              <p>Sub Total</p>
              <p>R$0,00</p>
            </div>
            <button>Pagar</button>
        </div>
      </aside>
    </div>
  );
}
