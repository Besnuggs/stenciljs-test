import { Component, Prop, State, Watch, h } from '@stencil/core';
import "@stencil/redux";
import {Store} from '@stencil/redux';
import {configureStore} from '../../store';
import user from '../../store/reducers/user';
import { statement } from '@babel/template';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  textInput!: HTMLInputElement

  @State() isVisible: boolean = false;
  name: MyAppState["user"]["name"];
  lastName: string = "Snuggs";
  fullName: string = "Brady Snuggs";
  newName: string;
  numberArray: array = [1,2,3,4,5];

  @Prop({context: "store"})
  store: Store;
  
  @Watch('fullName')
  validateName(newValue: string, oldValue: string){
    const isBlank = typeof newValue === null;
    const atLeast2chars = typeof newValue === 'string' && newValue.length >= -2
    if(isBlank){throw new Error('name: required')};
    if(!atLeast2chars){
      throw new Error('name: atLeast2chars')
    }
  } 


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

  handleChange = (input:string) => {
    console.log(input, this.fullName)
    this.fullName = input
  }

  showNewDiv = (event: UIEvent) => {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible)
  }

  // onSubmit = (ev:Event) => {
  //   ev.preventDefault();
  // }

  render() {
    console.log(this)
    
    return (
      <div>
        Hello, my name is {this.name} {this.lastName}.

      <p>
        <name-component 
        lastName={this.lastName}
        />
      </p>
        <div>
          <h1>This is my local state change</h1>
          {this.fullName}
          <br/>
          <input 
          onInput={(e) => this.handleChange((e.target as any).value)}
          />
          <button 
          onClick={this.showNewDiv.bind(this)}
          >
            Show
          </button>
          
        </div>

        <div>
        {
        this.isVisible ?
        <h1>PLEASE SHOW DAMNIT</h1>
        : null
        }
        </div>

        <my-name-input-component 
        showFunction={this.showNewDiv}
        />

        <div>
          {this.numberArray.map((e, i) => {
            <p key={i}>{e}</p>
          })}
        </div>
      </div>

      //   <div>
      //   <h1>FORM SUBMISSIONS</h1>
      //   <form onSubmit={this.handleSubmit}>
      //     <label>
      //       Name:
      //       <input
      //       type="text"
      //       ref={(el) => this.textInput = el as HTMLInputElement}
      //       ></input>
      //     </label>
      //     <input type="submit" value="Submit" />
      //   </form>
      // </div>

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
    )
  }
}
