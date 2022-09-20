export const Cabecalho =({busca, buscaODA}) => {
  var logoboca=require('./img/logo.png');
//   var perfil=require('./img/img-perfil.png');
  var perfil_pedro=require('./img/img_Pedro.jpg');
    return(
        <html>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
        </head>
        <body>
        <div id="sidebar-menu" className="sidebar">
        <div className="logo-details">
          <img src={logoboca} alt="Logo BocaWeb" />
          <span className="logo_name">BocaWeb</span>
        </div>
          <ul className="nav-links">
            <li>
              <a href="#!" className="active">
                <i className="fas fa-info-circle"></i>
                <span className="links_name">Sobre o BocaWeb</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-box' ></i>
                <span className="links_name">Produtos</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-pie-chart-alt-2' ></i>
                <span className="links_name">Estatísticas</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-user' ></i>
                <span className="links_name">Team</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-message' ></i>
                <span className="links_name">Mensagens</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-heart' ></i>
                <span className="links_name">Favoritos</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-cog' ></i>
                <span className="links_name">Configurações</span>
              </a>
            </li>
            <li className="log_out">
              <a href="#!">
                <i className='bx bx-log-out'></i>
                <span className="links_name">Log out</span>
              </a>
            </li>
          </ul>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i id='sidebarBtn-menu' className='bx bx-menu sidebarBtn' onClick={() => {let sidebar = document.querySelector(".sidebar"); 
            let sidebarBtn = document.querySelector(".sidebarBtn"); sidebar.classList.toggle("active");
              if(sidebar.classList.contains("active")){ sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right"); }else{
              sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");}}}></i>
            <span className="dashboard">BocaWeb Front</span>
          </div>
          <div className="search-box">
            <input name="busca" type="text" className="form-control" value={busca} placeholder="Pesquise uma ODA" aria-label="Search" aria-describedby="search-addon1" onChange={buscaODA}></input>
            <i className='bx bx-search' ></i>
          </div>
          <div className="profile-details">
            <img src={perfil_pedro} alt="Imagem Pedro Mota"/>
            <span className="admin_name">Pedro Mota</span>
            <i className='bx bx-chevron-down'></i>
          </div>
        </nav>
      </section>
        </body>
        </html>
    )
}