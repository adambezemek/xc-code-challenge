<template>
    <header class="header">
        <!-- mobile header --> 
        <div class="h-col">
            <a href="#" class="h-nav show-xs"><i class="fas fa-bars"></i></a> 
        </div>
        <div class="h-col h-col-center">
            <a href="index.html"><img class="logo show-md" alt="Habitat Logo" src="../assets/images/logo.png" ></a>
        </div>
        <!-- Navigation, hidden on smaller screens --> 
        <nav class="hide-xs">
            <ul> <!--Avoided dropdown in interest of time --> 
                <li><a href="#" class="hover-on">Home</a></li>
                <li><a href="#" class="hover-on">About Habitat</a></li>
                <li><a href="#" class="hover-on">Modules</a></li>
                <li><a href="#" class="hover-on">More Info</a></li>
            </ul>
        </nav>
        <div class="h-col h-col-end">
            <a href="#" class="icons"><i class="fas fa-globe-americas"></i></a>
            <a href="#" class="icons"><i class="fas fa-search"></i></a>            
        </div>



        
    </header>
    
</template>

<script>
export default {
  name: 'Header',

}
</script>

