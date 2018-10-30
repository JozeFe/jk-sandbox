from flask import Flask, Response, jsonify
from flask_restful import Api

app = Flask(__name__)
api = Api(app)


class dummy_dto:
    def __init__(self, foo: str = 'foo_value', bar: str = 'bar_value'):
        self.foo = foo
        self.bar = bar

    def to_json(self):
        return {
            'foo': self.foo,
            'bar': self.bar,
        }


@app.route('/hello', methods=['GET'])
def get_version():
    return 'Hello Flask!'


@app.route('/json_endpoint', methods=['GET'])
def list_models():
    dummy = dummy_dto()
    # json response
    return jsonify(dummy.to_json())


# Response and url parameter example
@app.route('/numeric/<parameter>', methods=['GET'])
def get_model(parameter):
    if not parameter.isnumeric():
        return Response("Parameter %s is not numeric" % parameter, status=400, mimetype='application/json')

    return Response("Value: %s is numeric" % parameter, status=200, mimetype='application/json')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
