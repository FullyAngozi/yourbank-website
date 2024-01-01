

const OurValues = () => {
  return (
    <section className="mt-20">
        <div className=' font-lexend mb-10 text-center lg:text-left'>
            <h2 className=' font-bold text-white text-4xl mb-5'>Our <span className=' text-green1'>Values</span></h2>
            <p className=' lg:text-lg text-text-gray font-light  lg:max-w-[70%]'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
        </div>
        <div className=' lg:grid lg:grid-cols-2 gap-10 gap-y-10'>
            <div className=' pl-5 border-l border-green1'>
                <h3 className=' font-bold text-2xl lg:text-4xl text-[#4C4C4D]  mb-3'>Integrity</h3>
                <p className=' text-text-gray lg:text-xl mb-3 lg:mb-0'>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
            </div>
            <div className=' pl-5 border-l border-green1'>
                <h3 className=' font-bold text-2xl lg:text-4xl text-[#4C4C4D]  mb-3'>Customer Centricity</h3>
                <p className=' text-text-gray lg:text-xl mb-3 lg:mb-0'>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
            </div>
            <div className=' pl-5 border-l border-green1'>
                <h3 className=' font-bold text-2xl lg:text-4xl text-[#4C4C4D]  mb-3'>Collaboration</h3>
                <p className=' text-text-gray lg:text-xl mb-3 lg:mb-0'>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>
            </div>
            <div className=' pl-5 border-l border-green1'>
                <h3 className=' font-bold text-2xl lg:text-4xl text-[#4C4C4D]  mb-3'>Innovation</h3>
                <p className=' text-text-gray lg:text-xl mb-3 lg:mb-0'>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking..</p>
            </div>
        </div>
    </section>
  )
}

export default OurValues