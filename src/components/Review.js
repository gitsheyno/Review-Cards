import people from '../data/data'
import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import { StyledReview, Global, Icons } from '../components/styles/StyledReview'
import Random from './Random'
const Review = () => {

    const [index, setIndex] = useState(0)
    const [person, setPerson] = useState(people[index])
    const handlePerson = () => {
        setPerson(people[index])
    }
    const checkNumber = (number) => {

        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        return number
    }
    const handleLeft = () => {

        let newIndex = checkNumber(index - 1)
        setIndex(newIndex)
    }
    const handleRigth = () => {
        let newIndex = checkNumber(index + 1)
        console.log(newIndex)
        setIndex(newIndex)
    }
    useEffect(() => {
        handlePerson()
    }, [index])
    const handleRnd = () => {
        let rnd = Math.floor(Math.random() * (people.length))
        setIndex(rnd)
    }
    return (
        <section>
            <Global />
            <StyledReview key={person.id}>
                <div>
                    <img src={person.image} />
                </div>
                <h4>{person.name}</h4>
                <h3>{person.job}</h3>
                <p>{person.text}</p>
                <Icons>
                    <FaChevronLeft
                        onClick={() => handleLeft()}
                    />
                    <FaChevronRight
                        onClick={() => handleRigth()}
                    />
                </Icons>
                <Random
                    handleRnd={handleRnd}
                />
            </StyledReview>
        </section>
    )
}

export default Review
