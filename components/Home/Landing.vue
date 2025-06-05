<template>
    <section class="">
        <div class=" bg-white border-b flex items-center justify-between p-4">
            <div>
                <h1 class="text-xl font-bold">DecodemyEmoji</h1>
            </div>

            <div>
                <button class="border-2 border-blue-600 text-blue-500 px-6 py-2 rounded-lg  font-semibold">
                    Sign up
                </button>
            </div>
        </div>
    </section>

    <div class="text-center flex items-center justify-center h-screen bg-sky-100">
        <div class="hero-container">
            <div class="hero-text">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">Translate Between <span class="text-blue-700">Text and
                        Emojis</span></h1>
                <p class="text-lg text-gray-700 mb-6">
                    Express yourself with emojis or decode what those cryptic emoji messages actually mean.
                    EmojiTranslate <br>
                    makes
                    communication more fun and accessible.
                </p>
            </div>

            <div class="space-x-4">
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Get started</button>
                <button
                    class="bg-white text-gray-700 px-6 py-2 rounded-lg border border-gray-100 hover:bg-red-500">Learn
                    more</button>
            </div>


        </div>

    </div>

    <section class=" h-screen flex items-center justify-center border-b border-black">

        <div class="chat-container bg-gray-200  rounded-lg h-[400px] w-2/4 flex items-center justify-center">
            <div class="bg-gray-100  flex flex-col items-center p-6  h-[380px] w-[97%] rounded-md">
                <!-- Header -->
                <div class="flex  items-center justify-between w-full mb-6">
                    <div class="flex space-x-2 mr-4">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <h1 class="text-xl font-bold text-gray-700">DecodemymEmoji</h1>
                    <div></div>
                </div>

                <!-- Chat Messages -->
                <div class="w-full max-w-md space-y-4">
                    <!-- Message 1: Gray Bubble with Emojis -->
                    <div class="bg-white p-3 rounded-lg shadow-md">
                        <p class="text-gray-800">I had an amazing day! 😄👍👏</p>
                    </div>

                    <!-- Message 2: Purple Bubble with Text -->
                    <div class="bg-indigo-600 text-white p-3 rounded-lg shadow-md">
                        <p>I had an amazing day!</p>
                    </div>

                    <!-- Message 3: Gray Bubble with Emojis -->
                    <div class="bg-white p-3 rounded-lg shadow-md">
                        <p>😍🤩😊</p>
                    </div>

                    <!-- Message 4: Purple Bubble with Text -->
                    <div class="bg-indigo-600 text-white p-3 rounded-lg shadow-md">
                        <p>I'm hyped, and absolutely loving this moment!</p>
                    </div>
                </div>
            </div>

        </div>


    </section>

    <section class="h-fit w-full py-10 px-10 border bg-gray-100">
        <div class="flex justify-center">
            <div class="px-10 text-center">
                <span class="text-3xl tracking-wider">Why Use EmojiTranslate?</span> <br>

                <span class="text-lg">Our platform offers powerful features to enhance your emoji experience</span>
            </div>
        </div>


        <div class=" flex items-center justify-center p-6 w-full">
            <div class="bg-white rounded-xl shadow-md p-6 max-w-xl w-full h-[210px]">
                <!-- Speech Bubble Icon -->
                <div class="text-3xl mb-4">💬</div>
                <!-- Heading -->
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Bidirectional Translation</h2>
                <!-- Description -->
                <p class="text-gray-600">
                    Convert text to emojis or decode emoji messages back to plain text with ease.
                </p>
            </div>
        </div>

        <div class=" flex items-center justify-center p-6 w-full">
            <div class="bg-white rounded-xl shadow-md p-6 max-w-xl w-full h-[210px]">
                <!-- Speech Bubble Icon -->
                <div class="text-3xl mb-4">🔍</div>
                <!-- Heading -->
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Emoji Explorer</h2>
                <!-- Description -->
                <p class="text-gray-600">
                    Browse and search through thousands of emojis organized by category.
                </p>
            </div>
        </div>

        <div class=" flex items-center justify-center p-6 w-full">
            <div class="bg-white rounded-xl shadow-md p-6 max-w-xl w-full h-[210px]">
                <!-- Speech Bubble Icon -->
                <div class="text-3xl mb-4">📤</div>
                <!-- Heading -->
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Easy Sharing</h2>
                <!-- Description -->
                <p class="text-gray-600">
                    Share your emoji translations with friends across various platforms.
                </p>
            </div>
        </div>


    </section>

</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}
</script>

<style scoped>
.bg-blue-50 {
    min-height: 100vh;
}
</style>