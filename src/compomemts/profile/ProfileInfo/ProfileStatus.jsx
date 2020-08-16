import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Yo'
    }

    activateEditMode = () => {
        /**
         * асинхронний
         */
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        /**
         * асинхронний
         */
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;