'use client';

import React, {useState} from "react";

import {FormState} from "@/app/models";
import {send} from "@/app/services/emailjs.service";

const initialState = {
    name: "",
    email: "",
    message: "",
    privacy: false,
}

export default function ContactForm() {
    const [form, setForm] = useState<FormState>(initialState)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // il primo parametro passato alla funzione send() è il nome di chi riceverà l'email, per esempio:
        // Tommy per InKae Tattoo Vennice
        // Riccardo per Ancilotto Costruzioni srl
        send('Tommy', form.name, form.email, form.message, form.privacy)
            .then(() => {
                console.log('Email inviata');
                setForm(initialState);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (e.currentTarget.name === 'privacy') {
            setForm({
                ...form,
                [e.currentTarget.name]: !form.privacy,
            });
        } else {
            setForm({
                ...form,
                [e.currentTarget.name]: e.currentTarget.value
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome / Azienda</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Inserisci il tuo nome"
                value={form.name}
                onChange={handleChange}
                required
            />

            <label htmlFor='email'>E-mail</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Inserisci la tua e-mail"
                value={form.email}
                onChange={handleChange}
                required
            />

            <label htmlFor='message'>Messaggio</label>
            <textarea
                id="message"
                name="message"
                cols={40} rows={10}
                placeholder="Inserisci il tuo messaggio"
                value={form.message}
                onChange={handleChange}
                required
            />

            <input
                type="checkbox"
                id="privacy"
                name="privacy"
                onChange={handleChange}
                checked={form.privacy}
                required
            />
            <label htmlFor='privacy' className="label-policy">
                Dichiaro di aver letto la privacy policy nonché di avere
                già compiuto quattordici anni e, se minore di quattordici, di essere stato autorizzato dal titolare
                della responsabilità genitoriale, pertanto presto il mio consenso per ricevere le informazioni.
            </label>

            <button type='submit' className='btn mt-7'>Invia il messaggio</button>
        </form>
    )
}