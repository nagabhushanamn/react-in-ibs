
import React from 'react'
import store from './store'

export function connect(InputComponent, callback) {

    class Container extends React.Component {
        constructor(props) {
            super()
            let state = callback(store.getState())
            this.state = {
                ...state
            }
        }
        componentDidMount() {
            store.subscribe(() => {
                //..
            })
        }
        componentWillUnmount() {
            //..
        }
        commonLogic() {
            //....
        }
        render() {
            return (
                <div>
                    <InputComponent {...this.state} />
                </div>
            )
        }
    }

    Container.displayName = `Connect<${InputComponent.name}>`

    return Container;

}