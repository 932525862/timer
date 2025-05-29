import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [tariff, setTariff] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const sendMessageToBot = async (name, email, message) => {
        const TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
        const CHAT_ID = "YOUR_CHAT_ID";
        const text = `📩 Yangi xabar!\n\n👤 Ism: ${name}\n📧 Email: ${email}\n📝 Xabar:\n${message}`;

        const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: "HTML",
                }),
            });

            return await response.json();
        } catch (error) {
            console.error("Xabar yuborishda xatolik:", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        try {
            await sendMessageToBot(name, email, message);
            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
            setTariff('');
        } catch (err) {
            alert("Xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="bg-[#386d63] py-[60px]" id="price">
            <div className="container1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[130px]">
                    <div className=" bg-white rounded-[30px] shadow-lg p-[30px] sm:p-[40px]">
                        <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] font-bold mb-4">
                            Questions? Get a quick reply by sending your message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="youremail@domain.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <select
                                value={tariff}
                                onChange={(e) => setTariff(e.target.value)}
                                required
                                placeholder="Tarif tanlang"
                                className="w-full p-3 border border-gray-300 rounded-md "
                            >
                                <option value="">Tarifni tanlang</option>
                                <option value="Basic">Basic</option>
                                <option value="Standard">Standard</option>
                                <option value="Premium">Premium</option>
                            </select>
                            <textarea
                                placeholder="Enter your message here"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send My Message"}
                            </button>
                            {success && (
                                <p className="text-green-600 text-sm">
                                    Xabar muvaffaqiyatli yuborildi ✅
                                </p>
                            )}
                        </form>
                    </div>
                    <div className="bg-[#fff] rounded-[60px] hidden md:block"></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
