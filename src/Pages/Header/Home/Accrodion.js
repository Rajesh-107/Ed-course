import React from 'react';

const Accrodion = () => {
    return (
        <div>
            <div class="hero  ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
    <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="w-full"
          alt="Sampleimage"
        />
      <h1 class="text-5xl font-bold">Answers to frequently asked
questions</h1>
      <p class="py-6">We have listed here the answers to some of your common questions. We request you to read this list once before asking questions. Then you don't have to wait for our reply and save your precious time.</p>
    </div>
    <div class="accordion" id="accordionExample5">
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOne5">
      <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
        aria-controls="collapseOne5">
        What do you need to know in advance to do the Course?
      </button>
    </h2>
    <div id="collapseOne5" class="accordion-collapse collapse show" aria-labelledby="headingOne5">
      <div class="accordion-body py-4 px-5">
        <p>Basic HTML, CSS, Basic JavaScript, Modern (ES6) JavaScript, DOM, React JS, npm, Git/GitHub concept and working experience in VSCode editor is required to take the course. </p>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingTwo5">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
        aria-controls="collapseTwo5">
        How will the course videos be given?
      </button>
    </h2>
    <div id="collapseTwo5" class="accordion-collapse collapse" aria-labelledby="headingTwo5">
      <div class="accordion-body py-4 px-5">
       <p>Course videos will be pre-recorded. You can watch the videos at any time by logging in with the login information provided after you enroll. 1-2 modules will be released every week and each module will contain 10-12 videos. You have to finish watching these videos in the first 5 days of the week so that you can submit the end-of-module assignments in the remaining 2 days.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingThree5">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
        aria-controls="collapseThree5">
        How to participate in the course tests?
      </button>
    </h2>
    <div id="collapseThree5" class="accordion-collapse collapse" aria-labelledby="headingThree5">
      <div class="accordion-body py-4 px-5">
        <p>প্রতিটি ভিডিওর সাথে কুইজ থাকবে এবং আপনাকে কুইজগুলোর উত্তর দিতে হবে। এছাড়া প্রতিটি মডিউল শেষে একটি করে বড়/মাঝারি এসাইনমেন্ট থাকবে এবং আপনাদেরকে 36 ঘণ্টার মধ্যে এসাইনমেন্ট করে সোর্স কোড এর গিটহাব রিপোসিটরি লিঙ্ক জমা দিতে হবে। এছাড়া পুরো কোর্স এর একদম শেষে একটি ফাইনাল পরীক্ষা নেয়া হবে অনলাইনে। সব কুইজ, এসাইনমেন্ট এবং পরীক্ষার প্রাপ্ত নম্বর যোগ করে ফাইনাল রেসাল্ট নির্ধারণ করা হবে।</p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Accrodion;