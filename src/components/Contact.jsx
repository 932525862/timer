import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import imgC from "../assets/eleso.webp";
import contactBg from "../assets/contact-bg.jpg"

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [tariff, setTariff] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessageToBot = async (name, phone, message, tariff) => {
    const TOKEN = "8194091080:AAGi0HKbljnPgHrY7YiD6BwsYU_ofQ4fGLI";
    const CHAT_ID = "5389621761";
    const text = `📩 Yangi xabar!\n\n👤 Ism: ${name}\n📱 Telefon: ${phone}\n📝  Tarif: ${tariff}\n📦 Xabar:\n${message}`;

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
    try {
      await sendMessageToBot(name, phone, message, tariff);
      toast.success(t("contact.mes"));
      setName("");
      setPhone("");
      setMessage("");
      setTariff("");
    } catch (err) {
      toast.error(t("contact.mes1"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} className="relative py-[60px]" id="contact">
     <div className="absolute inset-0 bg-black z-0 backdrop-blur-3xl w-full h-full opacity-50"></div>
      <div className="container1 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[130px]">
          <div className=" bg-white rounded-[30px] shadow-lg p-[30px] sm:p-[40px]">
            <h2 className="text-[30px] sm:text-[35px] lg:text-[30px] font-bold mb-4">
              {t("contact.titele")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder={t("contact.input1")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="tel"
                placeholder={t("contact.input2")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <select
                value={tariff}
                onChange={(e) => setTariff(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md "
              >
                <option value="">{t("contact.input4")}</option>
                <option value="Basic">{t("contact.tarifb")}</option>
                <option value="Standard">{t("contact.tarif3oy")}</option>
                <option value="Premium">{t("contact.tarif6oy")}</option>
              </select>
              <textarea
                placeholder={t("contact.input3")}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full cursor-pointer bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
                disabled={loading}
              >
                {loading ? t("contact.button1") : t("contact.button")}
              </button>
            </form>
          </div>
          <div
            className="rounded-[60px] hidden md:block w-full h-full"
            style={{
              backgroundImage: `url(${imgC})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
