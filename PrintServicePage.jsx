
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Upload, Printer } from "lucide-react";

export default function PrintServicePage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Remote Print & Scan Services</h1>
        <p className="text-lg text-muted-foreground">
          Fast, local document printing and scanning — powered by TEC B-572-QQ & Canon DR-9050C
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-xl">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Printer className="w-6 h-6" /> Printing Services
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Thermal label printing (shipping, barcodes)</li>
              <li>PDF & document printing (legal, real estate, student files)</li>
              <li>Bulk packet printing with sorting/stapling options</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Upload className="w-6 h-6" /> Scanning Services
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>High-speed scanning (Canon DR-9050C)</li>
              <li>OCR searchable PDFs</li>
              <li>Secure cloud delivery (Dropbox, Google Drive, Email)</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl shadow space-y-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Mail className="w-5 h-5" /> Request a Print or Scan Job
        </h3>
        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Tell us what you need printed or scanned..." rows={4} />
          <Input type="url" placeholder="Dropbox / Google Drive Link" />
          <Button type="submit">Send Request</Button>
        </form>
      </section>

      <footer className="text-center text-sm text-muted-foreground py-6">
        &copy; {new Date().getFullYear()} Remote Print Room. All rights reserved.
      </footer>
    </div>
  );
}
