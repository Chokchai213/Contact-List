FROM node:20

WORKDIR /app

COPY Contact3213 /app/frontend

RUN cd /app/frontend && npm install

COPY server /app/backend

RUN cd /app/backend && npm install

# Expose any necessary ports
EXPOSE 3000
EXPOSE 5000

# Set the entry point as the shell script
COPY start.sh .
RUN chmod +x start.sh
CMD ["./start.sh"]
