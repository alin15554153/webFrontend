var template = `
        <div  class="child" >
            <p @click="$store.commit('add')">{{message.name}}</p>
            <p @click="$store.commit('add')">sync {{$store.state.counter}}</p>
            <p @click="$store.dispatch('add')">async {{$store.state.counter}}</p>
            <p>async {{$store.getters.doubleCounter}}</p>
        </div>
`

export default template
