import React from 'react';

const Blogs = () => {
    return (
        <div classNameName='w-75 mx-auto '>
            <h1 style={{ color: 'orange' }} className='text-center my-4'>Questions</h1>
            <div className="accordion w-75 mx-auto mb-5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Difference between javascript and nodejs?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Javascript:</strong>Javascript একটি programming languageযা ওয়েবসাইটে scriptsলেখার জন্য ব্যবহার করা হয়। Javascript শুধুমাত্র browsers চালানো যেতে পারে। এটি মূলত client-side use করা হয়। Javascript html যোগ করতে এবং play with the DOM। Javascript frontend development ব্যবহার করা হয়।
                            <br />
                            <strong>NodeJS:</strong>NodeJS হল একটি Javascript runtime environment  আমরা NodeJS-এর সাহায্যে browser বাইরে NodeJS চালাতে পারি৷ এটি বেশিরভাগই server-side ব্যবহৃত হয়৷ Nodejs -এর HTML tags যুক্ত করার ক্ষমতা নেই৷ server-side development Nodejs ব্যবহার করা হয়৷
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Differences between sql and nosql databases?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>SQl:</strong> RELATIONAL DATABASE MANAGEMENT SYSTEM। এই databases fixed বা static বা predefined schema রয়েছে। এই databases hierarchical data storage জন্য উপযুক্ত নয়। এই databases complex queries জন্য সবচেয়ে উপযুক্ত। Vertically Scalable . Follows ACID property।
                            <br />
                            <strong>NoSQl:</strong> Non-relational বা distributed ডাটাবেস সিস্টেম। তাদের dynamic schema আছে। এই ডাটাবেসগুলো hierarchical data storage জন্য সবচেয়ে উপযুক্ত। এই databases complex queries জন্য এতটা ভালো নয়। Horizontally scalable. Follows CAP(consistency, availability, partition tolerance)
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            When should you use nodejs and when should you use mongodb?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>MongoDB:</strong> MongoDB হল ডকুমেন্ট Oriented Database। MongoDB JSON format প্রচুর data stores  করে। MongoDB-এর performance যেকোনো RDBMS-এর থেকে অনেক দ্রুত। MongoDB Large Scale Data সাথে কাজ করার জন্য designed করা হয়েছে। MongoDB multiple servers কাজ করতে পারে। MongoDB সহজেই বিপুল সংখ্যক অ্যাক্সেস অনুরোধ পরিচালনা করতে পারে।
                            <br />
                            <strong>Node JS:</strong> programming এ 2 টি design patterns আছে। একটি asynchronous programming এবং synchronous programming। Node JS ডিফল্টরূপে Asynchronous pattern অনুসরণ করে। অর্থাৎ কোনো কাজ শেষ হওয়ার জন্য অপেক্ষা করে না। এর মধ্যে, NodeJS আরেকটি কাজ শুরু করে। এজন্য আমরা nodeJS ব্যবহার করি।
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;