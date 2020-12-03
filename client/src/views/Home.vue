<template>

  <div class="home" id="homebox" >

    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>You</p>
      </div>

      <HomeDisplay />

    </article>

    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>Users</p>
      </div>

      <div class="message-body">

        <div class="card">

          <div class="card-content">

                <section>
                  <b-field label="Search for User">
                      <b-autocomplete
                          rounded
                          v-model="name"
                          :data="filteredDataArray"
                          placeholder="Type in User Here"
                          icon="magnify"
                          clearable
                          @select="option => selected = option">
                          <template slot="empty">No results found</template>
                      </b-autocomplete>
                  </b-field>
                </section>

              <br>

              <UserDisplay v-for="(user,i) in this.list" 
                :key="user"
                :user="user"
                :i="i" 
              />

          </div>

        </div>   

      </div>

    </article>


  </div>

</template>

<script>


  import HomeDisplay from "@/components/HomeDisplay";
  import UserDisplay from "@/components/UserDisplay";
  import { getList } from "@/models/users";

  export default {
    data() {
      return{
        list: [],
        name: '',
        selected: null
      }
    },
    async created(){
        this.list = await getList(); 
    },
    components: {
      HomeDisplay, UserDisplay
    },
    computed: {
        filteredDataArray() {
            return this.list.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
            })
        }
    }

  }

</script>

<style>

 #homebox{
    margin:auto;
    width: 50%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    background-color: white;
  }

  #sub-box{
    background-color: white;
  }

</style>

