export default function Greeting(props){
    const greeting = ()=>{
        return props.obj ? `${props.obj.firstName} ${props.obj.lastName}` : "Turma desconhecida"
    }

    return <h1>Olá, {greeting()}!</h1>
}