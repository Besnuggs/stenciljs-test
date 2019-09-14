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

    render(){
        console.log(this.lastName)
        return <h1>{this.name} {this.lastName}</h1>
    }
}