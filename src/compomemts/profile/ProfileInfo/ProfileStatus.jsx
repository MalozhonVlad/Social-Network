import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    /**
     * на каждий клик обновляется компонента !!!
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.state !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log("componentDidUpdate")
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;