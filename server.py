import http.server
import socketserver
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"[DIOGENES WATCH] Server started on http://localhost:{PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
except OSError as e:
    # If 3000 is occupied, try 8080
    PORT = 8080
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"[DIOGENES WATCH] Server started on http://localhost:{PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
