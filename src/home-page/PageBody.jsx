import React from 'react'
import { useState } from 'react'   
import MyImage from './ProfilePic.jpg'
import { CORE_CONCEPTS } from './data.js'
import Button from './Button.jsx'
import Card from './Cards.jsx'
import TabButton from './TabButton.jsx'
import { EXAMPLES } from './data.js'

const randomNames = ['Muheeb', 'Muheet', 'Mahi', 'Momo']
const namesSize = randomNames.length - 1
function genRandomNames(max) {
    return Math.floor(Math.random() * (max + 1));
}
const namegen = randomNames[genRandomNames(namesSize)]


function MainContent({ ...concept }) {
    return (

        <li>
            <img src={concept.image} alt={concept.title} />
            <h3>{concept.title}</h3>
            <p>{concept.description}</p>
        </li>

    );

}


function PageBody() {
    const [selectedTopic, setSelectedTopic]= useState("components");
   // const [jsxText , setjsxText] = useState("JSX");
   
   
    function onSelection(selectedButon){
       setSelectedTopic(selectedButon);
      // setjsxText(selectedButon);
        //return console.log("Hello World! - I Got selected");
   }
 console.log("App component running...");
    return (
        <>
            <div class="flex flex-auto shrink">
                <div class="container mx-auto">
                    <a href="/some/valid" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={MyImage} alt="Person in a" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </a>
                </div>
                <div class="container mx-auto">
                    <h3>I am known by many names, like {randomNames[1]}</h3>
                    <h3>I am known by many names, like {namegen}</h3>
                    <Card name="Anthony Blake" title="Associate Consultant">
                        <p>
                            Blake is a professor of Computer Science at the University of
                            Illinois.
                        </p>
                        <p>
                            <a href="mailto:blake@example.com">Email Anthony</a>
                        </p>
                    </Card>

                    <Card name="Maria Miles" title="Project Manager">
                        <p>
                            Maria is a professor of Computer Science at the University of
                            Illinois.
                        </p>
                        <p>
                            <a href="mailto:blake@example.com">Email Maria</a>
                        </p>
                    </Card>
                </div>
            </div>
            <br />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        <MainContent
                            {...CORE_CONCEPTS[0]}

                        />
                        <MainContent
                            {...CORE_CONCEPTS[1]}

                        />


                        <MainContent
                            {...CORE_CONCEPTS[2]}
                        />

                        <MainContent
                            {...CORE_CONCEPTS[3]}

                        />

                    </ul>
                </section>

            </main>
            <section id="examples">
                <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={()=>onSelection('components')}>Components</TabButton>
                        <TabButton onSelect={()=>onSelection('jsx')}>JSX</TabButton>
                        <TabButton onSelect={()=>onSelection('props')}>Props</TabButton>
                        <TabButton onSelect={()=>onSelection('state')}>State</TabButton>
                    </menu>
                    <div id="tab-content" className='tab'>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>{EXAMPLES[selectedTopic].code}</pre>
                    </div>
                    
            </section>
        </>

    )
}

export default PageBody