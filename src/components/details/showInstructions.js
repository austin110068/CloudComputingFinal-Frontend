import react from 'react'

const showInstructions = (meal) => {
    return (
      <ol className="instructions">
        {
          meal.strInstructions && meal.strInstructions.split(".")
            .map((step)=>{
              return(
                step &&
                  <>
                    <li>{step}.</li>
                  </>
              )
          })
        }
      </ol>
    )
}

  export default showInstructions