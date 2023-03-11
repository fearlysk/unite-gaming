import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module '@vue/runtime-core' {
    interface State {
        user: Object;
        isAuth: boolean;
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }

} 
