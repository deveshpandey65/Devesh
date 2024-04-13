import React from 'react';

export default function Skilldescription({ name }) {
    return (
        <div className='skilldetailblock'>
            <div className='skilldetailblockcontent'>
                {skills.map((val) =>
                    val.name === name ? <p key={val.name}>{val.des}</p>  : null
                )}
            </div>
        </div>
    );
}


export const skills = [{
    name: 'Python', des: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.[31] Python is dynamically typed and garbage- collected.It supports multiple programming paradigms, including structured(particularly procedural), object - oriented and functional programming.It is often described as a batteries included language due to its comprehensive standard library.[32][33] Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0.[34] Python 2.0 was released in 2000. Python 3.0, released in 2008, was a major revision not completely backward - compatible with earlier versions.Python 2.7.18, released in 2020, was the last release of Python 2.[35] Python consistently ranks as one of the most popular programming languages, and has gained widespread use in the machine learning community" }, 
    {
        name: 'HTML & CSS', des: 'HTML or HyperText Markup Language is used for creating web applications and websites. Below, we break the expansion down for better understanding HyperText or “text wrapped within a text.” is very similar to a hyperlink, but contains an underlying text which, when clicked, initiates a redirection to a new webpage. Markup language: A markup language needn’t be a programming language, but helps in applying formatting and layout to a text document. It helps create a more dynamic and interactive text content.Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable. CSS is designed to enable the separation of document content from document presentation, including elements such as font, layout, and colors. The style definitions are usually saved in external .css files.' }, 
{ name: '', des: '' },
{ name: '', des: '' },
 { name: '', des: '' }, 
 { name: '', des: '' }, 
 { name: '', des: '' }]