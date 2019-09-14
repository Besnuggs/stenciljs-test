import { Component, Prop, State, h } from '@stencil/core';
import "@stencil/redux";
import {Store} from '@stencil/redux';
import {configureStore} from '../../store';
import user from '../../store/reducers/user';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @State()
  name: MyAppState["user"]["name"];

  @Prop({context: "store"})
  store: Store;

  async componentWillLoad(){
    this.store.setStore(configureStore({}));
    this.store.mapStateToProps(this, (state: MyAppState) => {
      const {
        user: {name}
      } = state;
      return {
        name
      }
    })
  }


  render() {
    return (
      <div>
        Hello, my name is {this.name}.

      <p>
        <name-component />
      </p>

    
      </div>

      /* Original Setup */
      // <ion-app>
      //   <ion-router useHash={false}>
      //     <ion-route 
      //     url="/" 
      //     component="app-home" 
          
      //     />
      //     <ion-route 
      //     url="/profile/:name" 
      //     component="app-profile" 
          
      //     />
      //   </ion-router>
      //   <ion-nav />
      // </ion-app>
    );
  }
}
