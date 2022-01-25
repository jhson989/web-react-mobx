
const Component1 = observer (
    class Component1 extends React.Component {
        render() {
            var name = this.props.name;
            var color = this.props.color;
            console.log(colorStore.getToggle);
            if (colorStore.getColor == null && colorStore.getToggle == 'On')
                var background = lighten(color)
            else if (colorStore.getToggle == 'On')
                var background = lighten(colorStore.getColor)
            else
                var background = 'white'
                
            return (
                e("div", {className:name}, 
                    e('h1',{style:{color:color,backgroundColor:background}},`${color}`),
                    e('button', { onClick: () => {colorStore.setColor(color);}  }, `${color}`)
                )
            );
        }
    }
)


    