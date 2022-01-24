
const Component2 = observer (
    class Component2 extends React.Component {
        render() {
            var name = this.props.name;
            var color = this.props.color;

            if (colorStore.getColor == null)
                var background = lighten(color)
            else
                var background = lighten(colorStore.getColor)

            return (
                e("div", {className:name}, 
                    e('h1',{style:{color:color,backgroundColor:background}},`${color}`),
                    e('button', { onClick: () => {colorStore.setColor(color);}  }, `${color}`)
                )
            );
        }
    }
)


