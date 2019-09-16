import {Component, Prop, h, State} from '@stencil/core';
import {Store, Unsubscribe} from '@stencil/redux';

@Component({
    tag: 'name-component',
    styleUrl: './name-component.css'
})

export class nameComponent {
    storeUnsubscribe: Unsubscribe;

    @State()
    name: MyAppState['user']['name'];

    @Prop({context: 'store'})
    store: Store;

    @Prop({reflect: true}) 
    lastName;


    componentWillLoad(){
        this.storeUnsubscribe = this.store.mapStateToProps(this, (state: MyAppState) => {
            const {
                user: {name}
            } = state;
            return{
                name
            }
        })
    }

    componentDidUnload(){
        this.storeUnsubscribe();
    }

    showFromOtherMethod = (ev:Event) => {
        console.log('this is firing yes?')
        this.showFunction
    }

    render(){
        console.log(this.showFunction)
        return (
            <div>
                <h1>{this.name} {this.lastName} </h1>
                <ion-button
                onClick={this.showFromOtherMethod.bind(this)}
                >Showing from Another Component</ion-button>
            </div>
            )
    }
}