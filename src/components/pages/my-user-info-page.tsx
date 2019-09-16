import {Component, State, Prop, h} from '@stencil/core';
import {Store, Unsubscribe} from '@stencil/redux'
import {setUserName} from '../../store/actions/user';

@Component({
    tag: "my-name-input-component"
})

export class nameInputComponent {
    storeUnsubscribe: Unsubscribe;
    setUserName: typeof setUserName;

    @State()
    name: MyAppState["user"]["name"]

    @Prop({context: "store"})
    store: Store;

    componentWillLoad(){
        this.store.mapDispatchToProps(this, {setUserName});
        this.storeUnsubscribe = this.store.mapStateToProps(this, (state: MyAppState) => {
            const {
                user: {name}
            } = state;
            return{
                name
            };
        });
    }

    componentDidUnload() {
        this.storeUnsubscribe();
    }

    render(){
        return (
            <div>
                <h1>My-User-Info-Page</h1>
                <p>{this.name}</p>
                <input
                    value={this.name}
                    onInput={(e) => {this.setUserName((e.target as any).value)}}
                />
            </div>
        )
    }
}