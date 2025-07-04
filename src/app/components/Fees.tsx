export default function Fees() {
    return (
        <section id="fees" className="py-12 px-6 bg-gray-300">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Session Fees</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <div className="border p-6 rounded-lg w-full md:w-1/2 bg-gray-50">
                        <h3 className="text-lg font-medium text-gray-700 mb-1">Individual Session</h3>
                        <p className="text-xl text-green-600 font-semibold">$200</p>
                    </div>
                    <div className="border p-6 rounded-lg w-full md:w-1/2 bg-gray-50">
                        <h3 className="text-lg font-medium text-gray-700 mb-1">Couples Session</h3>
                        <p className="text-xl text-green-600 font-semibold">$240</p>
                    </div>
                </div>
            </div>
        </section>
    )
}