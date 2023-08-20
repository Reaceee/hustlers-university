import FAQ_card from "../components/FAQcard.jsx"

const FAQ = () => {

    const AllQuestions = [
        {
          question: "What is Hustlers University?",
          answer: "Hustlers University is a dynamic learning community focused on empowering young individuals with practical skills to excel in various fields and pursue their entrepreneurial ambitions."
        },
        {
          question: "Who can join Hustlers University?",
          answer: "Hustlers University is open to young people of all backgrounds who are eager to learn, grow, and take control of their futures. Age restrictions may apply based on the programs offered."
        },
        {
          question: "Are there any prerequisites to join?",
          answer: "No specific prerequisites are required to join Hustlers University. Our programs are designed to cater to individuals with various skill levels and backgrounds."
        },
        {
          question: "What kind of skills will I learn?",
          answer: "Our curriculum covers a wide range of practical skills, including entrepreneurship, communication, financial literacy, digital marketing, problem-solving, and more. The skills you gain will help you thrive in the modern world."
        },
        {
          question: "How are the courses structured?",
          answer: "Courses at Hustlers University are structured to provide a balanced mix of theory and hands-on experience. Workshops, projects, and real-world simulations are often integrated to enhance learning."
        },
        {
          question: "Is financial aid available?",
          answer: "Yes, we offer various financial aid options to ensure that our programs are accessible to a diverse range of individuals. Please contact our admissions team for more information."
        },
        {
          question: "Can I attend part-time?",
          answer: "Yes, we understand the importance of flexibility. We offer both full-time and part-time enrollment options to accommodate different schedules and commitments."
        },
        {
          question: "Will there be networking opportunities?",
          answer: "Absolutely! Hustlers University values the power of networking. We organize events, workshops, and collaborative projects to foster connections among our participants and industry experts."
        },
        {
          question: "How do I apply?",
          answer: "Applying is easy. Just fill out our online registration form with your details, and our admissions team will guide you through the process."
        },
        {
          question: "What sets Hustlers University apart?",
          answer: "Hustlers University stands out for its practical, results-driven approach. Our experienced mentors, industry partnerships, and emphasis on real-world application equip you for success beyond the classroom."
        }
      ]
      

    return (
        <>
            <p className="FAQS titlee w-full text-center p-5  mt-8 text-2xl font-bold ">Frequently Asked Questions</p>
            
            <div className="FAQ-cards flex flex-col w-full gap-5 p-5 md:px-14 md:grid grid-cols-2 ">

                {AllQuestions.map(qtn => (
                    <FAQ_card id={qtn.question.substring(0, qtn.question.indexOf('.'))} quest={qtn.question} ans={qtn.answer} />
                ))}
            </div>

            
            <p className="text-gray-500 text-center px-5 my-10 max-w-[800px]"> If you have any other inquiries, kindly contact us on WhatsApp. Remember to indicate that you have seen this page and you didn't find any similar to yours.</p>
        </>
    )
}

export default FAQ;