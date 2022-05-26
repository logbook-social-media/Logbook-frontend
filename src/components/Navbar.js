import { UserOutlined, NotificationOutlined, MessageOutlined, HomeOutlined, SearchOutlined} from '@ant-design/icons';

const Navbar = () => {
  return (
    <>
    <div className='navbar-nav'>
    <div className='container'>
      <div className='row'>
        <div class="col-2   text-black">LOGO</div>
        <div class="col-8  text-black">
        <div className='nav-search'>
        <input placeholder='Ara..'/>
        <span>
        <SearchOutlined />
        </span>
      </div>
        </div>
        <div class="col-2 nav-icon">
          <div>
          <HomeOutlined />
          </div>
          <div>
          <UserOutlined /> 
          </div>
          <div>
            <NotificationOutlined  />
          </div>
          <div>
          <MessageOutlined />
          </div> 
        </div>
      </div>
    </div>
    </div>      
    </>
  )
}
export default Navbar