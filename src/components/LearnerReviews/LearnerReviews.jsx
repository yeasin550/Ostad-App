
const LearnerReviews = () => {
    return (
        <div className="py-12 w-10/12 mx-auto">
            <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold">Learner Reviews</h1>
                <p>See what our learners are saying</p>
            </div>

            <div className="mt-8">
                <div className="flex gap-4">

                    {/* Column 1 */}
                    <div className="w-1/4">

                        <ul className="space-y-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300">
                            <li className="text-sm leading-6 bg-white">

                                <div className="relative p-3 text-justify space-y-6 leading-none rounded-lg border border-black group">
                                    <p className="leading-normal text-gray-500 text-md">ওস্তাদ-এর MERN কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই MERN এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ।</p>
                                    <div className="flex items-center space-x-4">
                                        <img src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg" className="w-12 h-12 rounded-full" alt="Kanye West" />
                                        <div className="space-y-2">
                                            <h3 className="text-[16px] font-semibold">Faisal Azam Siddiqui</h3>
                                            <p className="text-md">Full Stack Web Development with MERN Batch 1</p>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="text-sm leading-6 bg-white">

                                <div className="relative p-3 text-justify space-y-6 leading-none rounded-lg border border-black group">
                                    <p className="leading-normal text-gray-500 text-md">এই কোর্সটি হচ্ছে আমার লাইফে করা one of the best course। লার্নিং এক্সপিরিয়েন্স বলেন বা ওস্তাদ টিমের সাপোর্ট বলেন, সবই ছিল অসাধারণ। একদম বেসিক থেকে এত সুন্দরভাবে ডিটেইলস শেখানো হয়েছে, যে আমি অনেক কিছুই শেখার সুযোগ পেয়েছি।</p>
                                    <div className="flex items-center space-x-4">
                                        <h1 className="px-5 py-4 font-bold text-white rounded-full bg-black ">J</h1>
                                        <div className="space-y-2">
                                            <h3 className="text-[16px] font-semibold">Jahid Hossain</h3>
                                            <p className="text-md">Full Stack Web Development with MERN Batch 2</p>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="w-2/4">

                        <ul className="hidden space-y-4 sm:block" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300">
                            <li className="text-sm leading-6 bg-white">

                                <div className="relative p-3 text-justify space-y-6 leading-none rounded-lg border border-black group">
                                    <p className="leading-normal text-gray-500 text-md">Ostad এর বিশেষত্ত্ব হচ্ছে ওনারা  ডিজাইনের চেয়েও ডিজাইন সাইকোলজিতে ফোকাস বেশি দেয়। যা একজন শিক্ষার্তীর চাকরির ক্ষেত্রে খুব কাজে দেয় ও অন্য দশজন থেকে নিজেকে আলাদা করা যায়। ইন্ডাস্ট্রি ফোকাসড এই প্র্যাক্টিস আমাকে প্রোফেশনালি অনেক হেল্প করেছে।</p>
                                    <div className="flex items-center space-x-4">
                                        <img src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg" className="w-12 h-12 rounded-full" alt="Parag Agrawal" />
                                        <div className="space-y-2">
                                            <h3 className="text-[16px] font-semibold">
                                                Shafayet Rana</h3>
                                            <p className="text-md">UX/UI Batch 6</p>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="text-sm leading-6 flex gap-3">

                                <div className="w-1/2 bg-white h-[335px] relative p-3 text-justify space-y-6 leading-none rounded-lg border border-black group">
                                    <p className="leading-normal text-gray-500 text-md">Even though I come from a non-CS background, I felt that understanding data science would help me advance in my profession. In order to do so, I enrolled in an Ostad Data Science course. I believed it would be tough for me to understand without prior knowledge, but after taking the Ostad Data course, I learned that it is simple to crack and that they made it even easier.</p>
                                    <div className="flex items-center space-x-4">
                                        <h1 className="p-4 font-bold text-white rounded-full bg-black ">M</h1>
                                        <div className="space-y-2">
                                            <h3 className="text-[16px] font-semibold">MD Galib Hasan</h3>
                                            <p className="text-md">Data Science Certificate Program Batch 09</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col gap-3">

                                    <div className="relative p-3 bg-white text-justify space-y-6 leading-none rounded-lg border border-black group">
                                        <p className="leading-normal text-gray-500 text-md">সাজানো গোছানো একদম পরিপূর্ণ গাইডলাইন সমৃদ্ধ একটি কোর্স। আমার মতে এই কোর্স এর মডিউল এর বাইরে আলাদা করে আর কোনো সাহায্যের প্রয়োজন হয়না।</p>
                                        <div className="flex items-center space-x-4">
                                            <h1 className="px-5 py-[18px] font-bold text-white rounded-full bg-black ">A</h1>
                                            <div className="space-y-2">
                                                <h3 className="text-[16px] font-semibold">Md Ashfaque Ul Hoque</h3>
                                                <p className="text-md">UX/UI Batch 6</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative p-3 bg-white text-justify space-y-6 leading-none rounded-lg border border-black group">
                                        <p className="leading-normal text-gray-500 text-md">The Data Science program delivered by Ostad is perfect for me, I would recommend to anyone who might be interested to take the course.</p>
                                        <div className="flex items-center space-x-4">
                                            <h1 className="py-[17px] px-5 font-bold text-white rounded-full bg-black ">S</h1>
                                            <div className="space-y-2">
                                                <h3 className="text-[16px] font-semibold">ARM Salahuddin</h3>
                                                <p className="text-md">Data Science Certificate Program batch 19</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="w-1/4">

                        <ul className="hidden space-y-4 lg:block" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300">
                            <li className="text-sm leading-6 bg-white">

                                <div className="relative p-3 text-justify space-y-6 leading-none rounded-lg border border-black group">
                                    <p className="leading-normal text-gray-500 text-md">ক্লাস আলহামদুলিল্লাহ যেভাবে চেয়েছি পেয়েছি। ক্লাসের থেকে অনেক কিছুই পেয়েছি। ইন্সট্রাক্টর অনেক ভালো ছিল। ওভারঅল অনেক এঞ্জয় করেছি, ওভারঅল স্যাটিসফাইড।</p>
                                    <div className="flex items-center space-x-4">
                                        <img src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg" className="w-12 h-12 rounded-full" alt="Satya Nadella" />
                                        <div className="space-y-2">
                                            <h3 className="text-[16px] font-semibold">Abu Hasan</h3>
                                            <p className="text-md">UX/UI Batch 17</p>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="text-sm leading-6 bg-white">

                                <div className="relative p-3 text-justify space-y-6 leading-none rounded-lg border border-black group">
                                    <p className="leading-normal text-gray-500 text-md">MERN নিয়ে আমার এক্সপেক্টেশন ১০০% ফুলফিল হয়েছে। সব প্রয়োজনেই ওস্তাদ-এ পেয়েছি ইন্সট্যান্ট সাপোর্ট। এ কারণেই আমি ভুল করে করে শেখার সাহস করতে পেরেছি। ধন্যবাদ ওস্তাদকে। ওস্তাদের কোর্স আমি সবসময় রেকমেন্ড করবো।</p>
                                    <div className="flex items-center space-x-4">
                                        <img src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg" className="w-12 h-12 rounded-full" alt="Dan Schulman" />
                                        <div className="space-y-2">
                                            <h3 className="text-[16px] font-semibold">Nayem Islam</h3>
                                            <p className="text-md">Full Stack Web Development with MERN Batch 2</p>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LearnerReviews;
