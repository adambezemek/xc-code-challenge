<template>
    <header class="header">
        <!-- mobile header --> 
        <div class="header__col show-xs">
            <div class="hamburger-nav">
                <button href="#" class="hamburger-nav__button">
                    <i class="fas fa-bars"></i>
                </button>    
                <!-- normally actual nav goes here, skipping for now-->              
            </div>

        </div>
        <div class="header__col header__col--center">
            <a href="index.html"><img class="logo show-md" alt="Habitat Logo" src="../assets/images/logo.png" ></a>
        </div>
        <!-- Navigation, hidden on smaller screens --> 
        <nav class="nav hide-xs">
            <ul class="nav__menu"> <!--Avoided dropdown in interest of time --> 
                <li class="nav__menu-item">
                    <a href="#" class="nav__menu-link hover-on">Home</a>
                </li>
                <li class="nav__menu-item">
                    <a href="#" class="nav__menu-link hover-on">About Habitat</a>
                </li>
                <li class="nav__menu-item">
                    <a href="#" class="nav__menu-link hover-on">Modules</a>
                </li>
                <li class="nav__menu-item">
                    <a href="#" class="nav__menu-link hover-on">More Info</a>
                </li>
            </ul>
        </nav>
        <div class="header__col header__col--end">
            <div class="icons">
                <a href="#" class="icons__link"><i class="fas fa-globe-americas"></i></a>
                <a href="#" class="icons__link"><i class="fas fa-search"></i></a>  
            </div>
          
        </div> 
    </header>
    
</template>

<script>
export default {
  name: 'Header',

}
</script>

