const Toggle = observer (
    class Toggle extends React.Component {
            
        render() {
            var name = this.props.name;
            return (
                e("div", {className:name}, 
                    e('button', { onClick: () => {colorStore.setToggle();}  }, `${colorStore.getToggle}`)
                )
            )
        }

    }
)