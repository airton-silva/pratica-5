<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container"> <!--<a href="#" class="navbar-brand">Descomplica Bicho</a> -->
                                <router-link class="navbar-brand" to="/">Companies SA</router-link>
          <div class="d-flex ml-auto">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalNavbar" aria-controls="globalNavbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
            <div class="collapse navbar-collapse" id="globalNavbar">

                <ul class="navbar-nav mr-auto order-1">
                    <li class="nav-item ">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="/post" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add User
                        </a>
                    </li>
    
                </ul>
    
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  },
}
</script>