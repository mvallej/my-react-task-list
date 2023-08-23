export const Task = (props) => {
const {name, estado}= props
    return  <li>
    <h2>{name}</h2>
    <h3>{estado}</h3>
    </li>
}