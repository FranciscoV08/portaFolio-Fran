
export const Stacks = ({lenguaje}) => {

    const imgUrl = `../assets/skills/${lenguaje.id}.png`

  return (
    <div className="w-1/2 m-auto">
        <img className="w-auto" src={imgUrl} alt="" />
    </div>
  )
}
