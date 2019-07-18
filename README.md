# Overview
Lambda@Edge用に使えるLambda関数詰め合わせ。デフォルトでは何もしないので、要編集。

# 注意点
- Lambda@Edgeで利用されるLambda関数はus-east-1に作成する必要があるため、sam packageで指定するバケットはus-east-1である必要がある。
- Lambda@Edgeの設定を解除してすぐはLambda関数が削除出来ない場合があることに注意。しばらく待ってから削除しよう。

# 使い方
1. 各フォルダにあるapp.tsを編集する。
2. コンパイルする。
3. デプロイする。各種パラメータは適宜書き換える
<pre>
sam package --s3-bucket <bucket-name> --template-file template.yaml --output-template-file packaged.yaml
sam deploy --template-file packaged.yaml --stack-name LambdaEdge --region us-east-1 --capabilities CAPABILITY_IAM
</pre>