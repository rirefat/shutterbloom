import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";


const locales = ['en', 'bn'];
const defaultLocale = 'en';

function getLocale(request) {
    const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
    const headers = { "accept-language": acceptedLanguage };
    let languages = new Negotiator({ headers }).languages();

    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}`) &&
            !pathname.startsWith(`/${locale}/`)
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }

    return NextResponse.next();
}