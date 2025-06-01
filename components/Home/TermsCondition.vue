<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <div class="w-64 bg-white border-r flex flex-col">
            <div class="p-4 border-b">
                <h1 class="text-xl font-bold">Decodemyemoji</h1>
            </div>
            <div class="p-4">
                <button class="w-full bg-blue-500 text-white px-4 py-2 rounded mb-4 flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    New chat
                </button>
                <div class="flex items-center mb-4">
                    <button
                        class="w-full hover:text-white after:text-black hover:bg-blue-500  px-2 py-2 rounded  flex items-center">
                        <svg class="w-5 h-5 mr-2  " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                            </path>
                        </svg>
                        <span>Chat history</span>
                    </button>

                </div>
                <button
                    class="w-full hover:text-white after:text-black hover:bg-blue-500  px-2 py-2 rounded  flex items-center">
                    <i class="fa-solid pr-2 fa-face-smile"></i>
                    <span>Explore Emoji</span>
                </button>
                <div class="mt-4">
                    <h3 class="text-sm font-semibold mb-2">Today</h3>
                    <ul class="space-y-2 text-sm">
                        <li>Happy birthday to you</li>
                        <li>Vacation vibes with sunsh...</li>
                        <li>I'm feeling sick and tired</li>
                        <li>Good morning, have a gre...</li>
                        <li>Let's go to the beach</li>
                        <li>Good morning, have a gre...</li>
                    </ul>
                    <h3 class="text-sm font-semibold mt-4 mb-2">Yesterday</h3>
                    <ul class="space-y-2 text-sm">
                        <li>I love</li>
                        <li>Time to lunch</li>
                        <li>Working late tonight</li>
                        <li>I'm stuck in traffic</li>
                        <li>It's raining again</li>
                        <li>Feeling sleepy</li>
                        <li>Let's eat fast food or have...</li>
                        <li>Congrats on graduating!</li>
                        <li>Engaged or getting married</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <div class="p-4 border-b bg-white flex justify-between items-center">
                <div></div>
                <div class="flex items-center space-x-4">
                    <a href=""><span class="cursor-pointer hover:text-blue-500">Feedback?</span></a>
                    <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 duration-200"><i class="fa-solid fa-user"></i></div>
                </div>
            </div>
            <div class="flex-1 p-6 bg-gray-100 overflow-y-auto">
                <div class="max-w-2xl mx-auto text-gray-600">
                    <h2 class="text-2xl font-bold mb-6">Terms of Service</h2>
                    <div class="bg-white p-6 rounded-lg shadow">
                        <p class="text-gray-600 mb-4">Last updated: May 25, 2025</p>
                        <p class="text-gray-600 mb-4">
                            Welcome to Decodemyemoji! By using our service, you agree to comply with and be bound by the
                            following terms and conditions. Please review them carefully.
                        </p>
                        <h3 class="text-lg font-semibold mb-2 text-gray-600">1. Acceptance of Terms</h3>
                        <p class="text-gray-600 mb-4">
                            By accessing or using Decodemyemoji, you agree to these Terms of Service and our Privacy
                            Policy. If you do not agree, please do not use our service.
                        </p>
                        <h3 class="text-lg font-semibold mb-2 text-gray-600">2. Use of Service</h3>
                        <p class="text-gray-600 mb-4">
                            You agree to use Decodemyemoji only for lawful purposes. You are responsible for any content
                            you create or share through the platform.
                        </p>
                        <h3 class="text-lg font-semibold mb-2 text-gray-600">3. User Accounts</h3>
                        <p class="text-gray-600 mb-4">
                            To use certain features, you may need to create an account. You are responsible for
                            maintaining the confidentiality of your account information and for all activities under
                            your account.
                        </p>
                        <h3 class="text-lg font-semibold mb-2 text-gray-600">4. Intellectual Property</h3>
                        <p class="text-gray-600 mb-4">
                            All content on Decodemyemoji, including text, graphics, and code, is the property of
                            Decodemyemoji or its licensors and is protected by copyright laws.
                        </p>
                        <h3 class="text-lg font-semibold mb-2 text-gray-600">5. Termination</h3>
                        <p class="text-gray-600 mb-4">
                            We reserve the right to suspend or terminate your account if you violate these Terms of
                            Service or engage in any prohibited activities.
                        </p>
                        <p class="text-gray-600">
                            If you have any questions about these Terms, please contact us at <a
                                href="mailto:support@decodemyemoji.com"
                                class="text-indigo-500 hover:text-indigo-700">support@decodemyemoji.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>