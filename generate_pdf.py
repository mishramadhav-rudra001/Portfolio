import sys

def create_resume_pdf(filename):
    # Professional plain-text resume layout encoded into standard PDF 1.4 stream
    content_lines = [
        ("BT /F2 20 Tf 50 760 Td (MADHAV MISHRA) Tj ET"),
        ("BT /F1 10 Tf 50 742 Td (Aspiring Software Developer | AI/ML Enthusiast | Cybersecurity Learner) Tj ET"),
        ("BT /F1 9 Tf 50 728 Td (Email: mishramadhav03@gmail.com  |  Phone: +91 8340111208  |  Location: India) Tj ET"),
        ("BT /F1 9 Tf 50 714 Td (GitHub: github.com/mishramadhav-rudra001  |  LinkedIn: linkedin.com/in/madhav-kumar-1a9b84238) Tj ET"),
        
        # Horizontal rule
        ("0.8 0.8 0.8 RG 1 w 50 702 m 560 702 l S"),
        
        # Section: Education
        ("BT /F2 13 Tf 50 682 Td (EDUCATION) Tj ET"),
        ("BT /F2 10 Tf 50 666 Td (Bachelor of Computer Applications [BCA]) Tj ET"),
        ("BT /F1 10 Tf 50 652 Td (Indira Gandhi National Open University [IGNOU] - Current Enrollment | Expected: 2026) Tj ET"),
        ("BT /F1 9 Tf 50 638 Td (Core Coursework: Data Structures, OOP, Database Systems, Computer Networks, Operating Systems, Web Tech) Tj ET"),

        # Section: Core Domains
        ("BT /F2 13 Tf 50 614 Td (CORE TECHNOLOGY DOMAINS) Tj ET"),
        ("BT /F2 10 Tf 50 598 Td (1. Software Development:) Tj ET"),
        ("BT /F1 9 Tf 65 584 Td (- Building full-stack web architectures, clean modular code, responsive interfaces, REST APIs.) Tj ET"),
        ("BT /F1 9 Tf 65 570 Td (- Technologies: Python, JavaScript, HTML5, CSS3/Tailwind, React.js, Node.js, Express, MongoDB.) Tj ET"),

        ("BT /F2 10 Tf 50 550 Td (2. Artificial Intelligence & Machine Learning:) Tj ET"),
        ("BT /F1 9 Tf 65 536 Td (- Exploring foundational ML concepts, mathematical intuition, and data-driven pipelines.) Tj ET"),
        ("BT /F1 9 Tf 65 522 Td (- Focus Areas: Python for AI, NumPy, Scikit-Learn, Neural Network intuition, Data Exploration.) Tj ET"),

        ("BT /F2 10 Tf 50 502 Td (3. Cybersecurity & Systems:) Tj ET"),
        ("BT /F1 9 Tf 65 488 Td (- Understanding Linux operating environments, networking protocols, and system defenses.) Tj ET"),
        ("BT /F1 9 Tf 65 474 Td (- Focus Areas: Linux Fundamentals, Bash Scripting, TCP/IP, OSI Model, Network Auditing, OWASP.) Tj ET"),

        # Section: Technical Toolkit
        ("BT /F2 13 Tf 50 448 Td (TECHNICAL SKILLS & TOOLKIT) Tj ET"),
        ("BT /F1 9 Tf 50 432 Td (Programming: Python, JavaScript) Tj ET"),
        ("BT /F1 9 Tf 50 418 Td (Web Technologies: React.js, HTML5, CSS3, Tailwind CSS, Node.js [Learning], Express [Learning], MongoDB [Learning]) Tj ET"),
        ("BT /F1 9 Tf 50 404 Td (Cybersecurity & Systems: Linux CLI, Bash Automation, Networking Fundamentals [TCP/IP, Ports, DNS]) Tj ET"),
        ("BT /F1 9 Tf 50 390 Td (Tools & Environments: Git, GitHub, VS Code, Linux Terminal) Tj ET"),

        # Section: Projects & Blueprints
        ("BT /F2 13 Tf 50 364 Td (ENGINEERING PROJECTS & ARCHITECTURAL BLUEPRINTS) Tj ET"),
        ("BT /F2 10 Tf 50 348 Td (Full-Stack Web Architecture [MERN Stack]:) Tj ET"),
        ("BT /F1 9 Tf 65 334 Td (- Component-driven frontend in React with responsive Tailwind layout and modular state patterns.) Tj ET"),
        ("BT /F2 10 Tf 50 314 Td (Intelligent Data & ML Explorer [Python]:) Tj ET"),
        ("BT /F1 9 Tf 65 300 Td (- Automated dataset inspection, statistical correlation, and baseline classification models.) Tj ET"),
        ("BT /F2 10 Tf 50 280 Td (System & Network Reconnaissance Suite [Linux & Bash]:) Tj ET"),
        ("BT /F1 9 Tf 65 266 Td (- Automated shell scripts for port auditing, listening socket inspection, and system security posture.) Tj ET"),

        # Section: Professional Summary
        ("BT /F2 13 Tf 50 240 Td (PROFESSIONAL ATTRIBUTES) Tj ET"),
        ("BT /F1 9 Tf 50 224 Td (- Strong intellectual curiosity with commitment to transparent, verifiable skills.) Tj ET"),
        ("BT /F1 9 Tf 50 210 Td (- Balanced perspective bridging modern development, AI automation, and proactive security.) Tj ET"),
        ("BT /F1 9 Tf 50 196 Td (- Available for internships, entry-level software developer roles, and technical apprenticeships.) Tj ET"),
    ]

    stream_content = "\n".join(content_lines)
    stream_bytes = stream_content.encode('latin1')
    stream_length = len(stream_bytes)

    objects = []
    
    # Object 1: Catalog
    objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj")
    
    # Object 2: Pages
    objects.append("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj")
    
    # Object 3: Page
    objects.append("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj")
    
    # Object 4: Stream
    objects.append(f"4 0 obj\n<< /Length {stream_length} >>\nstream\n{stream_content}\nendstream\nendobj")
    
    # Object 5: Font F1 (Helvetica)
    objects.append("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj")
    
    # Object 6: Font F2 (Helvetica-Bold)
    objects.append("6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj")

    # Assemble PDF with cross-reference table
    pdf_header = "%PDF-1.4\n"
    body = ""
    offsets = []
    current_offset = len(pdf_header.encode('latin1'))

    for obj in objects:
        offsets.append(current_offset)
        obj_bytes = (obj + "\n").encode('latin1')
        current_offset += len(obj_bytes)
        body += obj + "\n"

    xref_offset = current_offset
    xref = f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n"
    for offset in offsets:
        xref += f"{offset:010d} 00000 n \n"

    trailer = f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n"

    full_pdf = pdf_header + body + xref + trailer
    with open(filename, 'wb') as f:
        f.write(full_pdf.encode('latin1'))
    print(f"Successfully generated valid PDF: {filename} ({len(full_pdf)} bytes)")

if __name__ == "__main__":
    create_resume_pdf("b:/Portfolio/public/resume.pdf")
