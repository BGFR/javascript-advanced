//02. Construction Crew  
function constructionCrew (input) {
	if(input.dizziness){
        let value = input.weight * input.experience * 0.1
        input.levelOfHydrated += value
        input.dizziness = false;
    }

    // input.prop = "prop";
    return input;

}

console.log(constructionCrew ({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )
);
